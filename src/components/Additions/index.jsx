import { useContext, useReducer } from 'react';
import { RegisterContext } from '../../context/RegisterContext';
import * as S from './style';

const targetAdditions = (state, action) => {
  switch (action.type) {
    case 'ONLINE_SERVICE':
      return {
        ...state,
        onlineService: { contratado: action.payload, price: 1.0 },
      };
    case 'LARGE_STORAGE':
      return {
        ...state,
        largeStorage: { contratado: action.payload, price: 2.0 },
      };
    case 'CUSTOMIZABLE':
      return {
        ...state,
        customizable: { contratado: action.payload, price: 2.0 },
      };
    default:
      return { state };
  }
};

export const Additions = () => {
  const { saveAddittions } = useContext(RegisterContext);
  const [additions, additionsDispatch] = useReducer(targetAdditions, {
    onlineService: { contratado: false, price: 1.0 },
    largeStorage: { contratado: false, price: 2.0 },
    customizable: { contratado: false, price: 2.0 },
  });

  const handleForm = (e) => {
    e.preventDefault();

    saveAddittions(additions);
  };

  return (
    <div className="container">
      <h2>Personal info</h2>
      <h3>Please provide your name, email address, and phone number.</h3>
      <S.Form onSubmit={handleForm}>
        <label>
          <div className="infos_add">
            <input
              type="checkbox"
              name="online_service"
              id="online_service"
              value="online_service"
              onChange={() =>
                additionsDispatch({
                  type: 'ONLINE_SERVICE',
                  payload: !additions.onlineService.contratado,
                })
              }
            />
            <div className="block_title">
              <span className="title_add">Online service</span>
              <span className="subtitle_add">Acess to multiplayer games</span>
            </div>
          </div>
          <span className="price_add">+$1/mo</span>
        </label>
        <label>
          <div className="infos_add">
            <input
              type="checkbox"
              name="large_storage"
              id="large_storage"
              value="large_storage"
              onChange={() =>
                additionsDispatch({
                  type: 'LARGE_STORAGE',
                  payload: !additions.largeStorage.contratado,
                })
              }
            />
            <div className="block_title">
              <span className="title_add">Large storage</span>
              <span className="subtitle_add">Extra 1TB of cloud sabe</span>
            </div>
          </div>
          <span className="price_add">+$2/mo</span>
        </label>
        <label>
          <div className="infos_add">
            <input
              type="checkbox"
              name="customizable"
              id="customizable"
              value="customizable"
              onChange={() =>
                additionsDispatch({
                  type: 'CUSTOMIZABLE',
                  payload: !additions.customizable.contratado,
                })
              }
            />
            <div className="block_title">
              <span className="title_add">Customizable profile</span>
              <span className="subtitle_add">Custom theme on your profile</span>
            </div>
          </div>
          <span className="price_add">+$2/mo</span>
        </label>
        <div className="button">
          <button type="submit">Next Step</button>
        </div>
      </S.Form>
    </div>
  );
};
