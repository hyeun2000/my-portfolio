import { useState } from 'react';
import SendRounded from '@mui/icons-material/SendRounded';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { validateEmail } from '../../utils/validate-email';
import ContactCard from './contact-card';

const INITIAL_FORM = { nickname: '', email: '', sns: '', message: '' };
const MESSAGE_MAX_LENGTH = 300;

/** 무채색 대신 웜 톤으로 맞춘 입력창 스타일 */
const fieldSx = {
  '& .MuiOutlinedInput-root': {
    bgcolor: 'var(--color-warm-input)',
    color: 'var(--color-warm-text)',
    borderRadius: 2,
    '& fieldset': { borderColor: 'var(--color-warm-border)', borderWidth: 2 },
    '&:hover fieldset': { borderColor: 'var(--color-warm-orange)' },
    '&.Mui-focused fieldset': { borderColor: 'var(--color-warm-orange-dark)' },
  },
  '& .MuiInputLabel-root': { color: 'var(--color-warm-text-soft)' },
  '& .MuiInputLabel-root.Mui-focused': { color: 'var(--color-warm-orange-dark)' },
  '& .MuiFormHelperText-root': { color: 'var(--color-warm-text-soft)' },
  '& .MuiFormHelperText-root.Mui-error': { color: 'var(--color-warm-orange-dark)', fontWeight: 700 },
};

/**
 * GuestbookForm 컴포넌트
 * 아이디·이메일(비공개)·SNS 계정·메시지를 입력받아 방명록을 남긴다.
 *
 * Props:
 * @param {function} onSubmit - 입력값 객체를 받아 등록하는 async 함수 [Required]
 * @param {boolean} isDisabled - 서버 미연결 등으로 입력을 막을지 여부 [Optional, 기본값: false]
 *
 * Example usage:
 * <GuestbookForm onSubmit={ addEntry } />
 */
function GuestbookForm({ onSubmit, isDisabled = false }) {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = (values) => {
    const nextErrors = {};
    if (!values.nickname) nextErrors.nickname = '아이디를 알려주세요 🙏';
    if (values.email && !validateEmail(values.email)) nextErrors.email = '이메일 형식을 확인해주세요';
    if (!values.message) nextErrors.message = '한마디만 남겨주세요 ✍️';
    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const trimmed = Object.fromEntries(
      Object.entries(form).map(([key, value]) => [key, value.trim()]),
    );
    const nextErrors = validate(trimmed);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);
    setResult(null);
    try {
      await onSubmit(trimmed);
      setForm(INITIAL_FORM);
      setResult({ severity: 'success', text: '방명록이 등록됐어요! 고마워요 🥳' });
    } catch (submitError) {
      setResult({ severity: 'error', text: submitError.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ContactCard emoji="🦖" title="방명록 남기기" tone="orange">
      <Box component="form" noValidate onSubmit={ handleSubmit } sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        <TextField
          name="nickname"
          label="아이디"
          size="small"
          required
          value={ form.nickname }
          onChange={ handleChange }
          error={ Boolean(errors.nickname) }
          helperText={ errors.nickname }
          disabled={ isDisabled }
          slotProps={{ htmlInput: { maxLength: 20 } }}
          sx={ fieldSx }
        />
        <TextField
          name="email"
          label="이메일 (선택)"
          type="email"
          size="small"
          value={ form.email }
          onChange={ handleChange }
          error={ Boolean(errors.email) }
          helperText={ errors.email || '🔒 비공개로 저장돼요. 답장이 필요할 때만 사용해요' }
          disabled={ isDisabled }
          slotProps={{ htmlInput: { maxLength: 100 } }}
          sx={ fieldSx }
        />
        <TextField
          name="sns"
          label="SNS 계정 (선택)"
          placeholder="@instagram_id"
          size="small"
          value={ form.sns }
          onChange={ handleChange }
          disabled={ isDisabled }
          slotProps={{ htmlInput: { maxLength: 50 } }}
          sx={ fieldSx }
        />
        <TextField
          name="message"
          label="메시지"
          required
          multiline
          minRows={ 3 }
          value={ form.message }
          onChange={ handleChange }
          error={ Boolean(errors.message) }
          helperText={ errors.message || `${form.message.length} / ${MESSAGE_MAX_LENGTH}` }
          disabled={ isDisabled }
          slotProps={{ htmlInput: { maxLength: MESSAGE_MAX_LENGTH } }}
          sx={ fieldSx }
        />
        { result && (
          <Alert
            severity={ result.severity }
            onClose={ () => setResult(null) }
            sx={{ bgcolor: 'var(--color-warm-input)', color: 'var(--color-warm-text)' }}
          >
            { result.text }
          </Alert>
        ) }
        <Button
          type="submit"
          variant="contained"
          endIcon={ <SendRounded /> }
          disabled={ isDisabled || isSubmitting }
          sx={{
            py: 1.2,
            borderRadius: 3,
            fontSize: '1rem',
            fontWeight: 800,
            color: 'var(--color-warm-text)',
            background: 'linear-gradient(135deg, var(--color-warm-yellow), var(--color-warm-orange))',
            border: '2px solid var(--color-warm-orange-dark)',
            boxShadow: 'none',
            '&:hover': {
              background: 'linear-gradient(135deg, var(--color-warm-orange), var(--color-warm-orange-dark))',
              boxShadow: 'none',
            },
            '&.Mui-disabled': { opacity: 0.6, color: 'var(--color-warm-text)' },
          }}
        >
          { isSubmitting ? '보내는 중... 🚀' : '방명록 남기기' }
        </Button>
      </Box>
    </ContactCard>
  );
}

export default GuestbookForm;
