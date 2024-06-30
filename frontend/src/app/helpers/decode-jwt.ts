export function decodeJWT(token: string): any {
  const payload = token.split('.')[1];
  let decodedPayload: any = {};
  try {
    decodedPayload = JSON.parse(atob(payload));
  } catch (e) {
    //console.log('Invalid JWT token');
    decodedPayload.studentID = -1;
    decodedPayload.profesorID = -1;
  }
  return decodedPayload;
}

