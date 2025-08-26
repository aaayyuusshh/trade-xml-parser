# Trade XML Parser 

A simple web-based tool to parse trade data in XML format. 

Paste your XML containing trades, and it will display a readable summary of each trade along with a grand total. 

<img width="1268" height="788" alt="Screenshot 2025-08-25 at 11 02 12 PM" src="https://github.com/user-attachments/assets/0b6aac6c-194c-4c6c-af53-b84cb134edc0" />

---

## Features

- Parses trade XML data with `<trades>` as the root element
- Displays individual trade details: ID, Symbol, Quantity, and Price
- Calculates grand totals for Quantity and Price
- Copy parsed output to clipboard
- Download parsed output as `parsed.txt`
- Error handling if XML does not start with `<trades>`

## Sample 

### Sample Input

```xml
<trades>
    <trade>
        <id>1</id>
        <symbol>AAPL</symbol>
        <quantity>100</quantity>
        <price>175.50</price>
    </trade>
    <trade>
        <id>2</id>
        <symbol>GOOG</symbol>
        <quantity>50</quantity>
        <price>2850.00</price>
    </trade>
    <trade>
        <id>3</id>
        <symbol>TSLA</symbol>
        <quantity>25</quantity>
        <price>720.25</price>
    </trade>
</trades>
```

### Sample Output
```bash
Parsed Trades:

Trade ID: 1 | Symbol: AAPL | Quantity: 100 | Price: 175.5
Trade ID: 2 | Symbol: GOOG | Quantity: 50 | Price: 2850
Trade ID: 3 | Symbol: TSLA | Quantity: 25 | Price: 720.25

Grand Total Quantity: 455
Grand Total Price: $500506.25
```

## Additional Notes
- Make sure the XML root element is `<trades>` or parsing will return an error
