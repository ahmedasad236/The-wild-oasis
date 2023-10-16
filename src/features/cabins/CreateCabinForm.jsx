import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createEditCabin } from '../../services/apiCabins';
import { toast } from 'react-hot-toast';
import FormRow from '../../ui/FormRow';

function CreateCabinForm({ handleCloseForm, cabinToEdit = {} }) {
  // Check if it is an edit action
  const { id: editId, ...editValues } = cabinToEdit;
  let isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {}
  });
  const { errors } = formState;

  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate: createCabin } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success('Cabin was created successfully');
      queryClient.invalidateQueries({
        queryKey: ['cabins']
      });
      reset();
      handleCloseForm();
    },
    onError: (err) => toast.error(err.message)
  });

  const { isLoading: isEditing, mutate: editCabin } = useMutation({
    mutationFn: createEditCabin,
    onSuccess: () => {
      toast.success('Cabin was edited successfully');
      queryClient.invalidateQueries({
        queryKey: ['cabins']
      });
      reset();
      handleCloseForm();
    },
    onError: (err) => toast.error(err.message)
  });

  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    const image = typeof data.image === 'string' ? data.image : data.image[0];
    if (isEditSession) {
      editCabin({ ...data, image }, editId);
    } else {
      createCabin({ ...data, image });
    }
  }

  function handleErr(err) {
    console.log(err);
  }
  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      onError={handleErr}
    >
      <FormRow
        label="name"
        error={errors?.name?.message}
      >
        <Input
          disabled={isWorking}
          type="text"
          id="name"
          {...register('name', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow
        label="Maximum capacity"
        error={errors?.max_capacity?.message}
      >
        <Input
          disabled={isWorking}
          type="number"
          id="max_capacity"
          {...register('max_capacity', {
            required: 'This field is required',
            min: { value: 1, message: 'Capacity should be at least 1' }
          })}
        />
      </FormRow>

      <FormRow
        error={errors?.regular_price?.message}
        label="Regular Price"
      >
        <Input
          disabled={isWorking}
          type="number"
          id="regular_price"
          {...register('regular_price', {
            required: 'This field is required',
            min: { value: 1, message: 'Price should be at least 1' }
          })}
        />
      </FormRow>

      <FormRow
        error={errors?.discount?.message}
        label="Dicount"
      >
        <Input
          disabled={isWorking}
          type="number"
          id="discount"
          defaultValue={0}
          {...register('discount', {
            required: 'This field is required',
            validate: (value) =>
              value <= getValues().regular_price ||
              'The discount should be less than regular price'
          })}
        />
      </FormRow>

      <FormRow
        error={errors?.description?.message}
        label="Description for website"
      >
        <Textarea
          disabled={isWorking}
          type="number"
          id="description"
          defaultValue=""
          {...register('description', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow
        error={errors?.image?.message}
        label="Cabin photo"
      >
        <FileInput
          disabled={isWorking}
          id="image"
          accept="image/*"
          {...register('image', {
            required: isEditSession ? false : 'This field is required'
          })}
        />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? 'Edit cabin' : 'Create new cabin'}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
