export default function Item({orders}) {
    if(!orders) {
        return;
    }

    const items = [];
    orders.forEach(o => {
        items.push(<p key={o.order_id}>{o.order_id}</p>)
    });

    return items;
}