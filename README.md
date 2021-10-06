# express-gateway-plugin-cookie-parser
Add express cookie-parser middleware to express-gateway

# Usage
```yaml
# system.config.yml
plugins:
    express-gateway-plugin-cookie-parser:
        package: 'express-gateway-plugin-cookie-parser'
```  

```yaml
# gateway.config.yml
pipelines:
  api:
    policies:
      - proxy:
        - condition:
            name: expression
            expression: "req.cookies.username === 'admin'"
```