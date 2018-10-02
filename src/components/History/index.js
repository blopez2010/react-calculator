import React from 'react';
import { updateExpression } from '../../actions/expression';
import { toggleHistory } from '../../actions/history';
import Button from '../Button';

export const historyItemClickHandler = history => {
  updateExpression(history);
  toggleHistory();
};

export const History = ({ showHistory, history }) => (
  <section className={`history ${showHistory ? 'visible' : ''}`}>
    <Button text="+" clickHandler={toggleHistory} buttonClass="toggle-close" />
    {history.map((mem, i) => (
      <Button
        key={i}
        buttonClass="block transparent"
        text={mem}
        clickHandler={historyItemClickHandler}
      />
    ))}
  </section>
);

export default History;
