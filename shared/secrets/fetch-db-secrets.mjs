const fetchSecret = (secretName) => {
  switch (secretName) {
    case 'password':
      return 'password1';
    case 'databaseName':
      return 'quotesdatabase';
    case 'port':
      return '3306';
    default:
      throw new Error(`Secret ${secretName} not found`);
  }
};
const fetchDbSecrets = () => {
  const password = fetchSecret('password');
  const databaseName = fetchSecret('databaseName');
  const port = fetchSecret('port');

  const envVariables = {
    MYSQL_ROOT_PASSWORD: password,
    MYSQL_DATABASE: databaseName,
    DB_PORT: port,
  };

  return envVariables;
}

export default fetchDbSecrets;