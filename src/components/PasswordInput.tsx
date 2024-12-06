import React, { useState } from 'react';
import { Input } from '@nutui/nutui-react';
import { Eye, Marshalling } from '@nutui/icons-react';

interface Props {
  field: string;
  placeholder?: string;
  handleFieldChange: (e: string) => void;
  setPasswordError: (e: string | null) => void;
  passwordError: string | null;
  style?: React.CSSProperties;
}

export function PasswordInput(props: Props) {
  const [showPassword, setShowPassword] = useState('password');

  return (
    <div className="relative mt-5">
      <Input
        type={showPassword}
        placeholder={props.placeholder}
        value={props.field === null ? '' : props.field}
        style={props.style}
        onChange={(e) => {
          props.handleFieldChange(e);
        }}
      />
      <div
        className={`absolute right-2 top-1/2 transform ${props.passwordError == null ? '-translate-y-1/2' : '-translate-y-full'}`}
      >
        {showPassword === 'text' ? (
          <Eye onClick={() => setShowPassword('password')} />
        ) : (
          <Marshalling onClick={() => setShowPassword('text')} />
        )}
      </div>
      <span className={'text-sm text-red-400 mt-1'}>{props.passwordError}</span>
    </div>
  );
}
