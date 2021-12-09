import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useFirestore } from '../../hooks/useFirestore';

// project components
import Form from '../UI/Form';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Error from '../UI/Error';
import AddIcon from '../icons/AddIcon';

const OperationForm = ({ user }) => {
  const [operation, setOperation] = useState('');
  const [validation, setValidation] = useState('');

  const { updateDocument } = useFirestore('users');

  const { t } = useTranslation();

  // Function for creating a new operation for the user
  const handleAddOperation = (e) => {
    e.preventDefault();
    const currentUser = user[0];
    const data = { actions: [...currentUser.actions, operation] };

    // Validate if the entered operation already exists (case sensitive)
    if (
      currentUser.actions
        .map((item) => item.toLowerCase())
        .includes(operation.toLowerCase())
    ) {
      return setValidation(t('validations.operation_exists'));
    }

    // Validate if the entered operation title is to long
    if (operation.length > 20) {
      return setValidation(t('validations.operation_text_too_long'));
    }

    updateDocument(currentUser.id, data);
    setOperation('');
  };

  // Clearing the input field and also resetting the validation text
  const handleClear = () => {
    setOperation('');
    setValidation('');
  };

  return (
    <>
      <Form style={{ width: '100%' }} onSubmit={handleAddOperation}>
        <Input
          name="operation"
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
          label={t('input.label.operation')}
          placeholder={t('input.placeholder.operation')}
          handleClear={handleClear}
          clearable
          required
        />
        <Button block icon={<AddIcon color="#fff" />}>
          {t('settings.add_operation')}
        </Button>
      </Form>
      <ValidationText>
        {validation && <Error noMargin>{validation}</Error>}
      </ValidationText>
    </>
  );
};

// styled components
const ValidationText = styled.div`
  width: 100%;
`;

export default OperationForm;
