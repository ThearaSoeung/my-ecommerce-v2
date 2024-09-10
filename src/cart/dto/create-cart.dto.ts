import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsOptional, IsString } from "class-validator"

export class CreateCartDto {
  @ApiProperty()
  @IsString()
  productId: string

  @ApiProperty()
  @IsString()
  userId: string

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  qty?: number
}