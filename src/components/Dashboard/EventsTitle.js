import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { tokens } from '../UI/tokens';

// Project imports
import Text from '../UI/Text';
import Error from '../UI/Error';
import FilterMenu from './FilterMenu';

const EventsTitle = ({ data, error, active, setActive, setWorkingHours }) => {
  const { t } = useTranslation();

  // Return the number of daily clients
  const clientsForDay = data
    .filter((client) => typeof client !== 'string')
    .map((client) => client.finished);

  return (
    <HeadBar>
      <Title>
        {!!clientsForDay.length && (
          <ClientsBadge finished={clientsForDay.every((item) => item === true)}>
            <Text variant="regular8" color={tokens.colors.fff}>
              {clientsForDay.length}
            </Text>
          </ClientsBadge>
        )}
        <Text tag="h2" variant="h2" color={tokens.colors.primaryDark3}>
          {t('dashboard.appointments')}
        </Text>
      </Title>

      <FilterMenu
        active={active}
        setActive={setActive}
        setWorkingHours={setWorkingHours}
      />

      {error && <Error>{error}</Error>}
    </HeadBar>
  );
};

// Styled components
const HeadBar = styled.div`
  width: 100%;
  padding: 0 10px 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ClientsBadge = styled.div`
  position: absolute;
  right: -16px;
  top: -8px;
  border-radius: 20px;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) =>
    props.finished ? `${tokens.colors.success}` : `${tokens.colors.warning}`};
  border: ${(props) =>
    props.finished
      ? `1px solid ${tokens.colors.success}`
      : `1px solid ${tokens.colors.warning}`};
  transition: 250ms ease;

  &:hover {
    transform: scale(2);
  }
`;

const Title = styled.div`
  position: relative;
`;

export default EventsTitle;

// Prop types
EventsTitle.propTypes = {
  active: PropTypes.string.isRequired,
  data: PropTypes.any,
  error: PropTypes.any,
  setActive: PropTypes.func.isRequired,
  setWorkingHours: PropTypes.func.isRequired,
};
