import { Params } from 'react-router-dom';
import { updateUserGameData } from '../firebase';
import { type UserGameDataItem } from './Search';

// function delay(ms: number) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

// same as user data, but boolean is string because of formData()
interface AlteredData {
  gameID: number;
  userID?: string;
  backlogged?: string | boolean;
  rating?: number;
  review?: string;
}

export default async function editUserGameData({
  request,
  params,
}: {
  request: Request;
  params: Params;
}) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const { gameID } = params;
  if (!gameID) return 'Error: no game id';
  const newUpdates: AlteredData = { ...updates, gameID: +gameID };
  if (newUpdates.backlogged) {
    newUpdates.backlogged = newUpdates.backlogged === 'true';
  }
  console.log(newUpdates);
  try {
    await updateUserGameData(newUpdates);
    return newUpdates;
  } catch (err) {
    if (err instanceof Error) {
      return { error: err.message };
    }
    return err;
  }
}
