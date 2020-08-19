import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server-micro'

const typeDefs = gql`
  type Query {
    trips: [trip!]!
    trip(id: String): trip
  }
  type trip {
    name: String
    id: String
    stops: Int
    imageUrl: String
    description: String
    region: String
  }
`
const trips = [
  {
    description: 'Maine’s Route 1 road trip is as quintessential New England as the West Coast’s Route 1 drive is classic California. If you happen to be picking your kids up from a New England sleepaway camp at the end of the summer, it’s arguably a good time to tack on a family adventure. But, kid camp aside, the state’s coastline (secretly famous for being longer than California’s), is certainly worth going out your way to explore, and it’s stunning in the fall, too. ',
    name: "Classic Maine",
    id: 'classic-maine',
    imageUrl: 'https://goop.com/wp-content/uploads/2016/07/maine-kennebunk2.jpg',
    stops: 4,
    region: "northeast",
  },
  {
    description: 'Take this iconic drive from San Diego to Los Angeles to see all that California has to offer.',
    name: "Pacific Coast Highway",
    id: 'pacific-coast-highway',
    imageUrl: 'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1600&h=838&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2015%2F08%2FPCH0815-brixy-bridge.jpg',
    stops: 6,
    region: "west",
  },
  {
    description: 'The lilting accents, the stiff drinks, the lingering meals—nearly everything about the American South asks us to slow down. The key to enjoying the region is not to rush. That goes for the Blue Ridge Parkway, too. With a speed limit that rarely exceeds 45 mph, the meandering, artfully laid-out, two-lane highway politely demands to be savored.',
    name: "Blue Ridge Parkway",
    id: 'blue-ridge-parkway',
    imageUrl: 'https://www.blueridgeparkway.org/wp-content/uploads/2017/09/mountain-highway-1400x0-c-default.jpg',
    stops: 6,
    region: "southeast",
  },
  {
    description: 'Discover epic adventures and scores of stunning spots across The Mighty 5® and the state parks and national monuments in-between on this ultimate itinerary.',
    name: "Utah Mighty 5",
    id: 'utah-mighty-five',
    imageUrl: 'https://s27363.pcdn.co/wp-content/uploads/2020/05/Mighty-5-Itinerary.jpg.optimal.jpg',
    stops: 6,
    region: "west",
  },
  {
    description: 'Driving along the Overseas Highway (US1) from Miami to Key West is one of the great American road adventures. Over 100 miles and 42 bridges connect 34 islands. The route is best driven in a convertible, takes you through a wonderland of mangrove trees, coral reefs, tropical savanna, quaint islands, and historical sites, and you’ll have the unique sensation of literally driving on water as you cruise over the bridges, with the Atlantic Ocean on one side and the Gulf of Mexico on the other. Many stretches of the highway are only two lanes wide, so you feel like you only have to stretch your hand out the window to touch the ocean.',
    name: "Miami to Key West",
    id: 'miam-key-west',
    imageUrl: 'https://www.gettingstamped.com/wp-content/uploads/2019/09/Florida-Keys-Road-Trip-Guide-Miami-to-Key-West-by-Car-800x450.jpg',
    stops: 6,
    region: "southeast",
  },
  {
    description: 'For a trip heavy on outdoor adventure and natural discoveries, hop in a car and journey through the Canadian Rockies.',
    name: "American Rockies",
    id: 'american-rockies',
    imageUrl: 'https://ewscripps.brightspotcdn.com/dims4/default/7e9d9f3/2147483647/strip/true/crop/640x360+0+0/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.thedenverchannel.com%2Fphoto%2F2015%2F07%2F02%2FRMNP%20035_1435880984758_20715445_ver1.0_640_480.jpg',
    stops: 6,
    region: "west",
  },
];

const resolvers = {
  Query: {
    trips() {
      return trips
    },
    trip(parent, { id }) {
      return trips.find((trip) => trip.id === id)
    },
  },
}

export const schema = makeExecutableSchema({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default new ApolloServer({ schema }).createHandler({
  path: '/api/graphql',
})
