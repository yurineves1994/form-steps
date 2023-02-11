import * as S from './style';

export const List = () => {
  const steps = [
    {
      name: 'your info',
      status: 'pendent',
    },
    {
      name: 'select plan',
      status: 'pendent',
    },
    {
      name: 'add-ons',
      status: 'pendent',
    },
    {
      name: 'summary',
      status: 'pendent',
    },
  ];
  return (
    <S.Container>
      <S.List>
        {steps.map((step, index) => (
          <S.ListItem
            key={index}
            className={step.status == 'sucess' && 'passed'}
          >
            <span className="number">{index + 1}</span>
            <div>
              <span className="step">STEP-{index + 1}</span>
              <span className="step_name">{step.name}</span>
            </div>
          </S.ListItem>
        ))}
      </S.List>
    </S.Container>
  );
};
