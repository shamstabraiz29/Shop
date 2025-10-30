import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import menProducts from '$lib/data/men-products.json';

export const GET: RequestHandler = async () => {
  try {
    return json({
      success: true,
      data: menProducts,
    });
  } catch (error) {
    return json(
      {
        success: false,
        error: 'Failed to fetch men products',
      },
      { status: 500 }
    );
  }
};
