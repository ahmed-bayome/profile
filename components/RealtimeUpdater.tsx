'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export const RealtimeUpdater = () => {
	const router = useRouter();

	useEffect(() => {
		const channel = supabase
			.channel('realtime-updates')
			.on(
				'postgres_changes',
				{
					event: '*',
					schema: 'public',
				},
				(payload) => {
					console.log('Realtime update received:', payload);
					router.refresh();
				}
			)
			.subscribe();

		return () => {
			supabase.removeChannel(channel);
		};
	}, [router]);

	return null;
};
