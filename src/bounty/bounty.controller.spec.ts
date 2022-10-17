import { Test, TestingModule } from '@nestjs/testing';
import { BountyController } from './bounty.controller';
import { BountyService } from './bounty.service';

describe('BountyController', () => {
  let controller: BountyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BountyController],
      providers: [BountyService],
    }).compile();

    controller = module.get<BountyController>(BountyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
