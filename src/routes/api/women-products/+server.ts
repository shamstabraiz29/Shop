import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import womenProducts from '$lib/data/women-products.json';

export const GET: RequestHandler = async () => {
  try {
    return json({
      success: true,
      data: womenProducts,
    });
  } catch (error) {
    return json(
      {
        success: false,
        error: 'Failed to fetch women products',
      },
      { status: 500 }
    );
  }
};
