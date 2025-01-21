### DOM-simplifier
This script is meant to simplify a DOM, for example for LLM usage. You can add custom rules for the simplification process.

## Build injectable script
```
npm i
```
```
npm run build
```
then inject the `bundle.js` content to a webpage

## Example
Original html:
```
<body>
  <div>
    <h1>Example Domain</h1>
    <p>This domain is for use in illustrative examples in documents. You may use this
    domain in literature without prior coordination or asking for permission.</p>
    <p>
      <a href="https://www.iana.org/domains/example">More information...</a>
    </p>
  </div>
</body>
```

Simplified html:
```
<body>
  <div><h1>Example Domain</h1>This domain is for use in illustrative examples in documents. You may use this
    domain in literature without prior coordination or asking for permission.<a href="https://www.iana.org/domains/example">More information...</a></div>
</body>
```
