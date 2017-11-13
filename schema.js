const { buildSchema } = require('graphql');

const schema = buildSchema(`

    type Vehicle {
        vid: String
        lat: Float
        lon: Float
        heading: Int
    }

    type PrevVehicle {
        timeSinceArrival: Float
        vehicle: Vehicle
    }

    type NextVehicle {
        timeToArrival: Float
        vehicle: Vehicle
    }

    type ServiceAlert {
        name: String
        message: String
        scope: String
        severity: String
    }

    type ServiceData {
        name: String
        value: Float
        unit: String
    }

    type Stop {
        sid: String
        name: String
        lat: Float
        lon: Float
        serviceData: [ServiceData]
        serviceAlerts: [ServiceAlert]
        nextVehicles: [NextVehicle]
        prevVehicles: [PrevVehicle]
    }

    type Route {
        name: String
        stops: [Stop]
        vehicles: [Vehicle]
    }

    type State {
        time: String
        routes: [Route]
    }

    type TrynState {
        agency: String
        startTime: String
        endTime: String
        states: [State]
    }

    type Query {
        trynState(
            agency: String!
            startTime: String!
            endTime: String
            routes: [String!]
        ): TrynState
    }

    schema {
        query: Query
    }
`);

module.exports = schema;
