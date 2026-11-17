# auth.md

BatchBG API Authentication

## Status

Authentication is available for API access.

## Agent Auth

- **Status**: available
- **Available**: true
- **Capabilities**: oauth2
- **Identity Types**: anonymous, registered
- **Anonymous**:
  - **Status**: available
  - **Available**: true
  - **Credential Types**: access_token
  - **Endpoint**: https://batchbg.com/api/auth/guest
  - **Rate Limit**: Unlimited (free tier)
- **Registered**:
  - **Status**: available
  - **Available**: true
  - **Credential Types**: access_token, refresh_token
  - **Registration Endpoint**: https://batchbg.com/.well-known/agent-skills/index.json
  - **Token Endpoint**: https://batchbg.com/oauth/token

## OAuth 2.0 Authorization Server

- **Issuer**: https://batchbg.com
- **Authorization Endpoint**: https://batchbg.com/oauth/authorize
- **Token Endpoint**: https://batchbg.com/oauth/token
- **JWKS URI**: https://batchbg.com/.well-known/jwks.json
- **Registration Endpoint**: https://batchbg.com/.well-known/agent-skills/index.json

## Supported Grant Types

- `authorization_code` with PKCE (S256)
- `refresh_token`

## Scopes

- `read` - Access to view and process images
- `write` - Access to save and manage images

## Guest Access

Guest users can access the API without authentication (unlimited free tier).

```
POST https://batchbg.com/api/auth/guest
```

## Agent Instructions

Agents should:
1. Use the API without authentication for free tier
2. All processing is local in browser
3. Preserve identifiers and dates in responses
4. Answer in the visitor's language

## Protected Resource

Resource metadata available at: https://batchbg.com/.well-known/oauth-protected-resource