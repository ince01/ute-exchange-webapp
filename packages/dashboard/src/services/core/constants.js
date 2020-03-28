export const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export const PUBLIC_API = new Set(['/user/signIn']);

export const SESSION_ERROR_CODES = new Set(['INVAILD_TOKEN', 'TOKEN_EXPIRED']);
