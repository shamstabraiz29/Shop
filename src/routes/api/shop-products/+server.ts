import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import shopProducts from '$lib/data/shop-products.json';

export const GET: RequestHandler = async () => {
  try {
    return json({
      success: true,
      data: shopProducts,
    });
  } catch (error) {
    return json(
      {
        success: false,
        error: 'Failed to fetch shop products',
      },
      { status: 500 }
    );
  }
};
