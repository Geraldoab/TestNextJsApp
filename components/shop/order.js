import Item from './item';

export default function Order({orders}) {
    return (
        <>
            <Item orders={orders} />
        </>
    );
}