const micro = require("micro");
const graphqlServer = require("express-graphql");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat
} = require("graphql");

const basketItems = [
  { id: "1", name: "Apple", price: 1.2, quantity: 2 },
  { id: "2", name: "Orange", price: 0.8, quantity: 3 },
];

const basketItem = new GraphQLObjectType({
    name: "basketItem",
    description: "A basket item",
    fields() {
        return{
            id: {
                type: GraphQLString
        },
        name: {
            type: GraphQLString
        },
        price: {
            type: GraphQLFloat
        },
        quantity: {
            type: GraphQLInt
        }
    };
}
});

const BasketType = new GraphQLObjectType({
    name: "basket",
    fields(){
        return{
            items: {
                type: new GraphQLList(basketItem)
            }
        };
    }
});

// query:
// {
//     basket {
//         items {
//             id
//             name
//             price
//             quantity
//         }
//     }
// }

const basket =  {
    type: BasketType,
    resolve() {
        return { 
            items: basketItems 
        };
    }  
};

const query = new GraphQLObjectType({
    name: "Query",
    description: "This is a root query",
    fields() {
        return {
            basket
        };
    }
});

const LineItemCost = {
    type: GraphQLFloat,
    args: {id: {type: GraphQLString}},
    resolve(root, args,context) {
        const item = basketItems.find(item => item.id === args.id);
        return item.price * item.quantity;
    }
};

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields() {
        return {
            LineItemCost
        };
    }
});

const handler = graphqlServer({
    schema: new GraphQLSchema({query, mutation}),
    graphiql: true
});

const server = micro(handler);

server.listen(3000, () => {
    console.log("Server is running on port 3000");
});