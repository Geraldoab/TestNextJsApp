import { gql } from "@apollo/client";
import createApolloClient from "../../apollo-client";

export default function Customer({customers}) {
    const customerLayout = [];
    
    {customers.map((c, index) => {
        customerLayout.push(<p key={c.customerId}>{c.name}</p>);
      })
    };

    return customerLayout;
}

/*export async function getStaticProps() {
  alert("AA")
    const client = createApolloClient();
    const { data } = await client.query({
      query: gql`
          query {
            customers {
                name
            }
        }
      `
    });
  
    console.log(data.customers.slice(0, 4));
  
    return {
      props: {
        customers: data.customers.slice(0, 4),
      },
    };
  }*/