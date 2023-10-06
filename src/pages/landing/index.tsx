import React from 'react';
import { FullPageLayout } from '@/components/layouts/exports';
import { H1 } from '@/components/text/exports';
import { Chat as ChatIcon } from '@/components/graphics/icons/exports';
import { Button } from '@/components/pressables/exports';
import { AppNavigation } from '@/navigation/types';

export default function Landing({ navigation }: AppNavigation<'landing'>) {
  return (
    <FullPageLayout scrollable={false}>
      <H1 className='text-first w-full text-center mb-[50px]'>DiDAY</H1>
      <ChatIcon className='h-[400px] mb-[30px]' />
      <Button
        label='Sign Up'
        onPress={() => navigation.push('sign-up')}
        classNames={{
          container: 'bg-third mb-[20px] md:max-w-[300px] ',
        }}
      />
      <Button
        label='Login'
        onPress={() => navigation.push('login')}
        classNames={{
          container: 'bg-third md:max-w-[300px]',
        }}
      />
    </FullPageLayout>
  );
}