import { Params } from 'react-router-dom';
import { updateUserGameData } from '../firebase';

function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// same as user data, but boolean is string because of formData()
interface IncomingData {
  userID?: string;
  backlogged?: string;
  backlogDegree?: string;
  rating?: string;
  review?: string;
}

interface AlteredData {
  gameID: number;
  userID?: string;
  backlogged?: boolean;
  backlogDegree?: number;
  rating?: number | null;
  review?: string;
}

function convertData(rawData: IncomingData, gameID: number): AlteredData {
  const returnObject: AlteredData = {
    gameID: +gameID,
    ...rawData,
  } as AlteredData;

  if (rawData.backlogged) {
    returnObject.backlogged = rawData.backlogged === 'true';
  }
  if (rawData.backlogDegree) {
    returnObject.backlogDegree = +rawData.backlogDegree;
  }
  if (rawData.rating) {
    if (rawData.rating === 'null') {
      returnObject.rating = null;
    } else {
      returnObject.rating = +rawData.rating;
    }
  }
  return returnObject;
}

export default async function editUserGameData({
  request,
  params,
}: {
  request: Request;
  params: Params;
}) {
  await delay(2000);
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const { gameID } = params;
  if (!gameID) return 'Error: no game id';
  const newUpdates = convertData(updates, +gameID);
  try {
    throw new Error('test error');
    await updateUserGameData(newUpdates);
    return newUpdates;
  } catch (err) {
    if (err instanceof Error) {
      return { error: err.message };
    }
    return err;
  }
}
