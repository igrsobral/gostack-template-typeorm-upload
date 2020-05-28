import {
  getCustomRepository,
  TransactionRepository,
  TreeChildren,
} from 'typeorm';

import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';

import Transactionsrepository from '../repositories/TransactionsRepository';

class DeleteTransactionService {
  public async execute(id: string): Promise<void> {
    // Busca, existe ? Não existe ?
    const transactionsRepository = getCustomRepository(Transactionsrepository);

    const transaction = await transactionsRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not exists');
    }

    await transactionsRepository.remove(transaction);
  }
}

export default DeleteTransactionService;
