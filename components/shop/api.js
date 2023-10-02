export async function getOrders() {
    const result = await fetch('http://localhost:5214/customers/1/orders');
    return await result.json();
}