import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  inset: 0;

  animation: showIn 200ms ease forwards;

  @keyframes showIn {
    to {
      opacity: 1;
    }
    from {
      opacity: 0;
    }
  }
`

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(props) => props.theme['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  animation: slideInTopToDown 200ms ease forwards;

  @keyframes slideInTopToDown {
    to {
      transform: translate(-50%, -50%);
    }
    from {
      transform: translate(-50%, -100%);
    }
  }

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border: 0;
      border-radius: 6px;
      background: ${(props) => props.theme['gray-900']};
      color: ${(props) => props.theme['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${(props) => props.theme['gray-500']};
      }
    }

    button[type='submit'] {
      height: 58px;
      border: 0;
      background: ${(props) => props.theme['green-500']};
      color: ${(props) => props.theme.white};
      font-weight: bold;
      padding: 0 1.25rem;
      border-radius: 6px;
      margin-top: 1.5rem;
      cursor: pointer;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${(props) => props.theme['green-700']};
        transition: background-color 0.2s;
      }
    }
  }

  @media (max-width: 768px) {
    & {
      min-width: 17.5rem;
      width: 100%;
      border-radius: 1.25rem 1.25rem 0 0;

      top: auto;
      bottom: 0;
      transform: none;

      animation: slideInDownToTop 200ms ease forwards;

      @keyframes slideInDownToTop {
        to {
          transform: translate(-50%, 0);
        }
        from {
          transform: translate(-50%, 100%);
        }
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  border: 0;
  background: transparent;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme['gray-500']};
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButtonProps>`
  background: ${(props) => props.theme['gray-700']};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  color: ${(props) => props.theme['gray-300']};

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }

  &:focus {
    box-shadow: 0 0 0 2px
      ${(props) =>
        props.variant === 'income'
          ? props.theme['green-500']
          : props.theme['red-500']};
  }

  &[data-state='unchecked']:hover {
    background: ${(props) => props.theme['gray-600']};
    transition: background-color 0.2s;
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};
    transition: background-color 0.2s, color 0.2s;

    svg {
      color: ${(props) => props.theme.white};
      transition: color 0.2s;
    }
  }
`