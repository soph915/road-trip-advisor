import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server-micro'

const typeDefs = gql`
  type Query {
    trips: [trip!]!
    trip(id: String): trip
  }
  type trip {
    name: String
    id: String
    imageUrl: String
    description: String
    region: String
    stops: [stop]
  }
  type stop {
    name: String
    description: String
  }
`
const trips = [
  {
    description: 'Maine’s Route 1 road trip is as quintessential New England as the West Coast’s Route 1 drive is classic California. If you happen to be picking your kids up from a New England sleepaway camp at the end of the summer, it’s arguably a good time to tack on a family adventure. But, kid camp aside, the state’s coastline (secretly famous for being longer than California’s), is certainly worth going out your way to explore, and it’s stunning in the fall, too. ',
    name: "Classic Maine",
    id: 'classic-maine',
    imageUrl: 'https://goop.com/wp-content/uploads/2016/07/maine-kennebunk2.jpg',
    region: "northeast",
    stops: [
      {
        'name':'Portland',
        'description': 'The Old Port waterfront features working fishing wharves and converted warehouses with restaurants and shops.',
      },
      {
        'name': 'Acadia National Park',
        'description': 'a 47,000-acre Atlantic coast recreation area primarily on Maine\'s Mount Desert Island',
      },
      {
        'name': 'Baxter State Park',
        'description': 'Climb Mt Katahadin, the highest point in Maine and the terminus of the Appalachian Trail.',
      }
    ],
  },
  {
    description: 'Take this iconic drive from San Diego to Los Angeles to see all that California has to offer.',
    name: "Pacific Coast Highway",
    id: 'pacific-coast-highway',
    imageUrl: 'https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=1600&h=838&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2015%2F08%2FPCH0815-brixy-bridge.jpg',
    region: "west",
    stops: [
      {
        'name':'San Diego',
        'description': 'America\'s Finest City',
      },
      {
        'name': 'Los Angeles',
        'description': 'The City of Angels',
      },
      {
        'name': 'San Francisco',
        'description': 'The City of Brotherly Love',
      }
    ],
  },
  {
    description: 'The lilting accents, the stiff drinks, the lingering meals—nearly everything about the American South asks us to slow down. The key to enjoying the region is not to rush. That goes for the Blue Ridge Parkway, too. With a speed limit that rarely exceeds 45 mph, the meandering, artfully laid-out, two-lane highway politely demands to be savored.',
    name: "Blue Ridge Parkway",
    id: 'blue-ridge-parkway',
    imageUrl: 'https://www.blueridgeparkway.org/wp-content/uploads/2017/09/mountain-highway-1400x0-c-default.jpg',
    stops: [
      {
        'name':'Charlottesville',
        'description': 'Home of UVA. Go Hoos!',
      },
      {
        'name': 'Waynesboro',
        'description': '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      },
      {
        'name': 'Asheville',
        'description': 'Gentle breezes, clear skies and gorgeous views are the hallmarks of summer in Asheville',
      },
      {
        'name': 'Smokey Mountain National Park',
        'description': 'The most popular national park in the US!',
      }
    ],
    region: "southeast",
  },
  {
    description: 'Discover epic adventures and scores of stunning spots across The Mighty 5 and the state parks and national monuments in-between on this ultimate itinerary.',
    name: "Utah Mighty 5",
    id: 'utah-mighty-five',
    imageUrl: 'https://s27363.pcdn.co/wp-content/uploads/2020/05/Mighty-5-Itinerary.jpg.optimal.jpg',
    region: "west",
    stops: [
      {
        'name':'Zion National Park',
        'description': 'Hike the famous Narrows slot canyon hike with its soaring canyon walls.',
      },
      {
        'name': 'Bryce',
        'description': 'This park is known for its hoodoos, tall, thin spires of rock that protrude from the bottom of an arid drainage basin or badland',
      },
      {
        'name': 'Capitol Reef',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      },
      {
        'name': 'Arches',
        'description': 'Lorem ipsum dolor sit amet, consectetur ',
      },
      {
        'name': 'Canyonlands',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      }
    ],
  },
  {
    description: 'Driving along the Overseas Highway (US1) from Miami to Key West is one of the great American road adventures. Over 100 miles and 42 bridges connect 34 islands. The route is best driven in a convertible, takes you through a wonderland of mangrove trees, coral reefs, tropical savanna, quaint islands, and historical sites, and you’ll have the unique sensation of literally driving on water as you cruise over the bridges, with the Atlantic Ocean on one side and the Gulf of Mexico on the other. Many stretches of the highway are only two lanes wide, so you feel like you only have to stretch your hand out the window to touch the ocean.',
    name: "Miami to Key West",
    id: 'miam-key-west',
    imageUrl: 'https://www.gettingstamped.com/wp-content/uploads/2019/09/Florida-Keys-Road-Trip-Guide-Miami-to-Key-West-by-Car-800x450.jpg',
    stops: ['Portland', 'Acadia National Park'],
    region: "southeast",
    stops: [
      {
        'name':'Miami',
        'description': 'Check out the beaches, nightlife, and neighborhoods like Little Havana and Wynwood',
      },
      {
        'name': 'Key West',
        'description': 'Gimme some key lime pie!',
      }
    ],
  },
  {
    description: 'For a trip heavy on outdoor adventure and natural discoveries, hop in a car and journey through the American Rockies.',
    name: "American Rockies",
    id: 'american-rockies',
    imageUrl: 'https://ewscripps.brightspotcdn.com/dims4/default/7e9d9f3/2147483647/strip/true/crop/640x360+0+0/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.thedenverchannel.com%2Fphoto%2F2015%2F07%2F02%2FRMNP%20035_1435880984758_20715445_ver1.0_640_480.jpg',
    region: "west",
    stops: [
      {
        'name':'Rocky Mountain National Park',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      },
      {
        'name': 'Wind River Range',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      },
      {
        'name': 'Grand Tetons',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      },
      {
        'name': 'Yellowstone',
        'description': 'Lorem ipsum dolor sit amet, consectetur ',
      },
      {
        'name': 'Glacier National Park',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      }
    ],
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
