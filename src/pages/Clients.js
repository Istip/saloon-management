import React, { useState } from 'react';
import styled from 'styled-components';
import { useCollection } from '../hooks/useCollection';
import { tokens } from '../components/UI/tokens';

// project components
import Button from '../components/UI/Button';
import Modal from '../components/Clients/ModalAddClient';
import Text from '../components/UI/Text';
import ClientList from '../components/Clients/ClientList';
import AddIcon from '../components/icons/AddIcon';

const Clients = () => {
  const [show, setShow] = useState(false);

  const { documents, error } = useCollection('clients', null, null, [
    'name',
    'asc',
  ]);

  const clients = documents;

  return (
    <>
      <ClientsWrapper>
        <Title>
          <Text tag="h2" variant="h2" color={tokens.colors.primaryDark3}>
            Clients
          </Text>
          <Button
            rounded
            onClick={() => setShow(!show)}
            icon={<AddIcon color="#fff" />}
          />
        </Title>

        {error && error}

        <ClientList clients={clients} />
      </ClientsWrapper>

      <Modal show={show} setShow={setShow} />
    </>
  );
};

// styled components
const ClientsWrapper = styled.div`
  margin: 60px 0 80px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
`;

export default Clients;
