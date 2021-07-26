import { getSpacePortData } from './SpacePortDataPretendAPI';

// [1] Use a handy TypeScript utility to generate a type for the returned data
// from the getPromotedSpacePortData function
type SpacePortData = ReturnType<typeof getSpacePortData>;
export const checkIfItWorks1: SpacePortData = getSpacePortData();

// [2] The data from the API isn't always up to date, so we keep our own list
// of spaceports that are no longer open. Create a new type that excludes these,
// using another handy TS utility.
type ClosedSpacePorts = 'alderaan' | 'deathStar';
type OpenSpacePortData = Omit<SpacePortData, ClosedSpacePorts>
export const checkIfItWorks2: OpenSpacePortData = {
  hoth: checkIfItWorks1['hoth'],
  degobaNorth: checkIfItWorks1['degobaNorth'],
  degobaSouth: checkIfItWorks1['degobaSouth'],
}

// [3] We want to create our own data set, to track whether we are promoting
// each spaceport on the list.  Use the OpenSpacePortData type (above) to make
// a mapped type for this data.
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

// [5] Sometimes we filter this list based on various factors.  Create a type
// using IsSpacePortPromotedData (or Alt) that will allow any of the keys to be missing.
type PartialIsSpacePortPromotedData = Partial<IsSpacePortPromotedData>;
export const checkIfItWorks5: PartialIsSpacePortPromotedData = {
  hoth: true,
}

// [6] Generic types are similar to the utility types that TS provide, 
// but we can make them ourselves!  We have two different details types for
// open and closed spaceports.  Create a utility type, using ClosedSpacePorts,
// the keyword "extends" and a conditional expression, that will return the correct
// type based on the SpacePort name.

type OpenSpacePortInfo = { cafeName: string, toiletQty: number };

type ClosedSpacePortInfo = { dateOfClosure: string };

type InfoUtility<T> = T extends ClosedSpacePorts ? ClosedSpacePortInfo : OpenSpacePortInfo;

export const checkIfItWorks6: InfoUtility<'alderaan'> = { dateOfClosure: 'A long time ago..' };

export const checkIfItWorks7: InfoUtility<'hoth'> = { cafeName: 'Frozen Treats', toiletQty: 5 };
