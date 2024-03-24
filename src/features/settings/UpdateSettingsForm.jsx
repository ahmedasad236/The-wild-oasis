import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { useSettings } from './hooks/useSettings';
import Spinner from '../../ui/Spinner';
import { useUpdateSettings } from './hooks/useUpdateSettings';

function UpdateSettingsForm() {
  const { updateSettings } = useUpdateSettings();
  const {
    isLoading,
    settings: {
      min_booking_length,
      max_booking_length,
      max_guests_per_booking,
      breakfast_price
    } = {}
  } = useSettings();

  function handleUpdateSettings(e, field) {
    const { value } = e.target;
    if (!value) return;
    updateSettings({ [field]: value });
  }

  if (isLoading) return <Spinner />;
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={min_booking_length}
          onBlur={(e) => handleUpdateSettings(e, 'min_booking_length')}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          onBlur={(e) => handleUpdateSettings(e, 'max_booking_length')}
          defaultValue={max_booking_length}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          onBlur={(e) => handleUpdateSettings(e, 'max_guests_per_booking')}
          defaultValue={max_guests_per_booking}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          onBlur={(e) => handleUpdateSettings(e, 'breakfast_price')}
          defaultValue={breakfast_price}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
