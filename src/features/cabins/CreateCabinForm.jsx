import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCabin } from '../../services/apiCabins';
import { toast } from 'react-hot-toast';
import FormRow from '../../ui/FormRow';

function CreateCabinForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;
  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success('Cabin was deleted successfully');
      queryClient.invalidateQueries({
        queryKey: ['cabins']
      });
      reset();
    },
    onError: (err) => toast.error(err.message)
  });

  function onSubmit(data) {
    mutate({ ...data, image: data.image[0] });
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="name"
        error={errors?.name?.message}
      >
        <Input
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
          id="image"
          accept="image/*"
          {...register('image', { required: 'This field is required' })}
        />
      </FormRow>

      <FormRow>
        <Button
          variation="secondary"
          type="reset"
        >
          Cancel
        </Button>
        <Button dusabled={isCreating}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
