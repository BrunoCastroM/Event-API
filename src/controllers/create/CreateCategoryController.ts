import { Request, Response } from 'express';
import { prismaClient } from '../../database/prismaClient';

export class CreateCategoryController {
  async handle(request: Request, response: Response) {
    try {
      const { name } = request.body;

      // Cria a categoria
      const category = await prismaClient.category.create({
        data: {
          name,
        },
      });

      return response.status(201).json(category);
    } catch (error) {
      console.error('Error creating category:', error);
      return response
        .status(500)
        .json({ error: 'An error occurred while creating the category' });
    }
  }
}
