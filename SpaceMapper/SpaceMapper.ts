import { getSpacePortData } from './SpacePortDataPretendAPI';

// [1] Use a handy TypeScript utility to generate a type for the returned data
// from the getPromotedSpacePortData function
type SpacePortData = ReturnType<typeof getSpacePortData>;
const spacePortData: SpacePortData = getSpacePortData();

// [2] The data from the API isn't always up to date, so we keep our own list
// of spaceports that are no longer open. Create a new type that excludes these,
// using another handy TS utility.
type ClosedSpacePorts = 'alderaan' | 'deathStar';
type OpenSpacePortData = Omit<SpacePortData, ClosedSpacePorts>
export const checkIfItWorks2: OpenSpacePortData = {
  hoth: spacePortData['hoth'],
  degobaNorth: spacePortData['degobaNorth'],
  degobaSouth: spacePortData['degobaSouth'],
}

// [3] We want to create our own data set, to track whether we are promoting
// each spaceport on the list.  Use the OpenSpacePortData type (above) to make
// a mapped type for this data
type IsSpacePortPromotedData = { [key in keyof OpenSpacePortData]: boolean}
export const checkIfItWorks3: IsSpacePortPromotedData = {
  hoth: true,
  degobaNorth: false,
  degobaSouth: true,
}

// [4] Rewrite the above using the Record utility instead.  The type will 
// essentially be the same, it's up to you which style you prefer!
type IsSpacePortPromotedDataAlt = Record<keyof OpenSpacePortData, boolean>
export const checkIfItWorks4: IsSpacePortPromotedDataAlt = {
  hoth: true,
  degobaNorth: false,
  degobaSouth: true,
}

// [5] Generic types are similar to the utility types that TS provide, 
// but we can make them ourselves!  We have two different details types for
// open and closed spaceports.  Create a utility type, using ClosedSpacePorts,
// the keyword "extends" and a conditional expression, that will return the correct
// type based on the SpacePort name.

type OpenSpacePortSomething = { something: string, other: number };

type ClosedSpacePortSomething = { dontKnow: string };

type SomethingUtility<T> = T extends ClosedSpacePorts ? ClosedSpacePortSomething : OpenSpacePortSomething;

export const checkIfItWords5: SomethingUtility<'alderaan'> = { dontKnow: 'foo' };

export const checkIfItWords6: SomethingUtility<'hoth'> = { something: 'foo', other: 2 };

// [5] Something with Partial