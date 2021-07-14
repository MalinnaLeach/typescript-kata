import { getSpacePortData } from './SpacePortDataPretendAPI';

// [1] Use a handy TypeScript utility to generate a type for the returned data
// from the getPromotedSpacePortData function
type SpacePortData = ReturnType<typeof getSpacePortData>;
const spacePortData: SpacePortData = getSpacePortData();

// [2] The data from the API isn't always up to date, so we keep our own list
// of spaceports that are no longer open. Create a new type that excludes these.
type ClosedSpacePorts = 'alderaan' | 'deathStar';
type OpenSpacePortData = Omit<SpacePortData, ClosedSpacePorts>
const checkIfItWorks2: OpenSpacePortData = {
  hoth: spacePortData['hoth'],
  degobaNorth: spacePortData['degobaNorth'],
  degobaSouth: spacePortData['degobaSouth'],
}


// [3] We want to create our own data set, to track whether we are promoting
// each spaceport on the list.  Use the type above to make a mapped type
// for this data
type IsSpacePortPromotedData = { [key in keyof SpacePortData]: boolean}
const checkIfItWorks3: IsSpacePortPromotedData = {
  hoth: true,
  degobaNorth: false,
  degobaSouth: true,
}

