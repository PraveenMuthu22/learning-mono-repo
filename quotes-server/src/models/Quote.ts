import { DataTypes } from "sequelize";
import sequelize from '@/src/database';

const Quote = sequelize.define('Quote', {
  quote: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Quote;