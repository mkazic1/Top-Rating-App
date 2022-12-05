import React from 'react';

export default interface SearchInterface {
  query: string
  onChange: (e: any) => void
  onSubmit: (e: any) => any
}
