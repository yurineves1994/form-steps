import { useContext, useState } from 'react';
import { RegisterContext } from '../../context/RegisterContext';
import * as S from './style';

export const Additions = () => {
  const { saveAddittions } = useContext(RegisterContext);
  const [onlineService, setOnlineService] = useState(false);
  const [largeStorage, setLargeStorage] = useState(false);
  const [customizable, setCustomizable] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();

    const additions = {
      onlineService: onlineService == true ? 'contratado' : 'não-contratado',
      largeStorage: largeStorage == true ? 'contratado' : 'não-contratado',
      customizable: customizable == true ? 'contratado' : 'não-contratado',
    };

    saveAddittions(additions);
  };

  return (
    <S.Container>
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
              onChange={() => setOnlineService(!onlineService)}
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
              onChange={() => setLargeStorage(!largeStorage)}
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
              onChange={() => setCustomizable(!customizable)}
            />
            <div className="block_title">
              <span className="title_add">Customizable profile</span>
              <span className="subtitle_add">Custom theme on your profile</span>
            </div>
          </div>
          <span className="price_add">+$2/mo</span>
        </label>
        <button type="submit">Next Step</button>
      </S.Form>
    </S.Container>
  );
};
