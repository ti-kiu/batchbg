# BatchBG Authentication

## Overview

BatchBG API uses OAuth 2.0 for authentication. All API endpoints require authentication to ensure secure access and proper rate limiting.

## Authentication Methods

### OAuth 2.0 Authorization Code Flow

Recommended for web applications and services that need to access BatchBG API on behalf of users.

#### Flow Steps

1. **Redirect to Authorization Endpoint**
   ```
   GET https://batchbg.com/oauth/authorize
     ?client_id=YOUR_CLIENT_ID
     &response_type=code
     &scope=read+write
     &redirect_uri=YOUR_REDIRECT_URI
     &state=RANDOM_STATE
     &code_challenge=CODE_CHALLENGE
     &code_challenge_method=S256
   ```

2. **User Authorization**
   - User reviews requested permissions
   - User grants or denies access
   - BatchBG redirects back to your application with authorization code

3. **Exchange Code for Access Token**
   ```
   POST https://batchbg.com/oauth/token
   Content-Type: application/x-www-form-urlencoded

   grant_type=authorization_code
   &code=AUTHORIZATION_CODE
   &redirect_uri=YOUR_REDIRECT_URI
   &client_id=YOUR_CLIENT_ID
   &client_secret=YOUR_CLIENT_SECRET
   &code_verifier=CODE_VERIFIER
   ```

4. **Use Access Token**
   ```
   GET https://batchbg.com/api/remove-bg
   Authorization: Bearer YOUR_ACCESS_TOKEN
   ```

### Client Credentials Flow

For server-to-server communication without user context.

```
POST https://batchbg.com/oauth/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials
&client_id=YOUR_CLIENT_ID
&client_secret=YOUR_CLIENT_SECRET
&scope=read+write
```

## Scopes

| Scope | Description |
|-------|-------------|
| `read` | Read access to user data and processing history |
| `write` | Write access to create processing jobs and upload images |

## Token Information

- **Access Token Lifetime**: 1 hour
- **Refresh Token Lifetime**: 30 days
- **Token Format**: JWT (JSON Web Token)

### Token Structure

```json
{
  "sub": "user_id",
  "iss": "https://batchbg.com",
  "aud": "https://batchbg.com",
  "exp": 1234567890,
  "iat": 1234567890,
  "scope": "read write",
  "client_id": "YOUR_CLIENT_ID"
}
```

## Rate Limits

Rate limits are applied per access token:

| Plan | Requests/Hour | Requests/Day |
|------|---------------|--------------|
| Free | 60 | 1000 |
| Pro | 300 | 5000 |
| Enterprise | Custom | Custom |

Rate limit headers are included in all API responses:

```
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 59
X-RateLimit-Reset: 1234567890
```

## Error Responses

### 401 Unauthorized

```json
{
  "error": "invalid_token",
  "error_description": "The access token is invalid or expired"
}
```

### 403 Forbidden

```json
{
  "error": "insufficient_scope",
  "error_description": "The request requires higher privileges than provided by the access token"
}
```

## Security Best Practices

1. **Never expose client secrets** in client-side code
2. **Use HTTPS** for all API requests
3. **Validate tokens** on your server before using them
4. **Implement PKCE** (Proof Key for Code Exchange) for public clients
5. **Rotate client secrets** periodically
6. **Use minimal scopes** required for your application

## Testing

### Test Environment

Use the sandbox environment for testing:

```
Authorization Endpoint: https://sandbox.batchbg.com/oauth/authorize
Token Endpoint: https://sandbox.batchbg.com/oauth/token
API Endpoint: https://sandbox.batchbg.com/api
```

### Test Credentials

Contact support@batchbg.com to obtain test credentials for the sandbox environment.

## SDKs and Libraries

### JavaScript/Node.js

```javascript
const { BatchBG } = require('@batchbg/sdk');

const client = new BatchBG({
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
  redirectUri: 'YOUR_REDIRECT_URI'
});

// Get authorization URL
const authUrl = client.getAuthorizationUrl({
  scope: ['read', 'write'],
  state: 'random_state'
});

// Exchange code for token
const tokens = await client.exchangeCode(code);

// Use API
const result = await client.removeBackground(imageBuffer, {
  format: 'png'
});
```

### Python

```python
from batchbg import BatchBG

client = BatchBG(
    client_id='YOUR_CLIENT_ID',
    client_secret='YOUR_CLIENT_SECRET',
    redirect_uri='YOUR_REDIRECT_URI'
)

# Get authorization URL
auth_url = client.get_authorization_url(scope=['read', 'write'])

# Exchange code for token
tokens = client.exchange_code(code)

# Use API
result = client.remove_background(image_file, format='png')
```

## Support

For authentication issues or questions:

- **Email**: support@batchbg.com
- **Documentation**: https://batchbg.com/docs
- **Status Page**: https://status.batchbg.com

## Related Resources

- [OAuth 2.0 RFC 6749](https://tools.ietf.org/html/rfc6749)
- [OAuth 2.0 Security Best Current Practice](https://tools.ietf.org/html/draft-ietf-oauth-security-topics)
- [OpenID Connect Core 1.0](https://openid.net/specs/openid-connect-core-1_0.html)
