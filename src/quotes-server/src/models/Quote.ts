import { DataTypes } from "sequelize";
import sequelizeInstance from '@/src/sequelize-instance';

const Quote = (() => {
  return sequelizeInstance.define('quotes', {
    quote: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
})();



export default Quote;