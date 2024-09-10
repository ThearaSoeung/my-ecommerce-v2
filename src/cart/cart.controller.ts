import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { CartService } from "./cart.service";
import { ApiBody, ApiOkResponse, ApiParam, ApiTags } from "@nestjs/swagger";
import { CartDetailDto } from "./dto/cart-detail.dto";
import { UpdateCartDto } from "./dto/update-cart.dto";
import { CreateCartDto } from "./dto/create-cart.dto";

@ApiTags('cart')
@Controller('cart')
export class CartController {
  constructor(
    private readonly cartService: CartService
  ) { }

  @Get()
  @ApiOkResponse({ type: CartDetailDto, isArray: true })
  async find(@Param() { id }) {
    return this.cartService.findOne(id);
  }

  @Post(':id')
  @ApiParam({ name: 'id', type: String })
  async create(@Param() id: string, @Body() createCartDto: CreateCartDto) {
    return this.cartService.create(id, createCartDto);
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: CartDetailDto })
  @ApiOkResponse({ type: CartDetailDto })
  async findOne(@Param() { id }) {
    return this.cartService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: String })
  @ApiOkResponse({ type: Boolean })
  async update(@Param('id') { id }, @Body() UpdateCartDto: UpdateCartDto) {
    return this.cartService.update(id, UpdateCartDto);
  }
}