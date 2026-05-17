- all looks pretty good
- The invoice should accept items via the constructor, no need to have this be modifiable

- one other question? **are these really ==different== items?**
- -i **develop** a **Generic** item that will share to hold data that belongs to both OrderItem and InvoiceItem `LineItem`
	- maybe even `QuoteItem` would benefit

___

```java
class InvoiceItem {
    private int amount; String sku;
}

class OrderItem {
    private int amount; private String sku; private int qty;
}

class Invoice {
    private int total;
    private ArrayList<InvoiceItem> items;
}

class Order {
    private int total;
    private ArrayList<OrderItem> items;

    public void add(OrderItem item) {
        items.add(item);
    }

    public Invoice asInvoice(InvoiceMaker maker) {
        maker.total = this.total;

        for (OrderItem i : items) {
            maker.addItem(i.amount, i.sku);
        }

        return maker.make();
    }

    public function submit(InvoiceMaker maker): Invoice {
        // do some complex operations here
        // ...
        // done
        return asInvoice(maker);
    }
}

/**
 * The maker can accept params later on
 * Different makers can be created
 * The maker can decide which type of invoice and invoice item it should create
 * This is now more of a builder
*/
class InvoiceMaker {
    private ArrayList<OrderItem> items;

    void addItem(int amount, String sku) {
        this.items.add(new InvoiceItem(amount, sku));
    }

    public Invoice make(int total) {
        return new Invoice(total, this.items);
    }
}

class Main {
    public static void main() {
        i = new Order(
                new ArrayList(new OrderItem(1, 'new', 2), new OrderItem(2, 'shoes', 1))
        ).submitOrder(new InvoiceMaker());
    }
}
```

___

- real case scenario -> order item contains a complex item configuration which requires a different type of item
	- does the order really have the capacity to handle this? 
	- does it need to know all this about config items?
	- what if other types are needed in the future? We'l be adding new types and then modifying this code as well

- ==pitanje== je: **sto tocno Order treba znati od order itema**? Vjerojatno samo qty a i to djelomicno

```java
class Order {
	private ArrayList<OrderItem>;
	void addItem(String sku, int qty, int amount) {
		if (amount > 100) {
			items.add(new LargeOrderItem(sku, qty, amount));
		}
	}
}
```
