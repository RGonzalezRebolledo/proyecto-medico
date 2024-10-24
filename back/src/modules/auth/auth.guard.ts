import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers['authorization']?.split(' ')[1] ?? '';

    if (!token) {
      throw new UnauthorizedException('Bearer token no encontrado');
    }

    try {
      const secret = process.env.JWT_SECRET;
      const playLoad = this.jwtService.verify(token, { secret });

      playLoad.iat = new Date(playLoad.iat * 1000);
      playLoad.exp = new Date(playLoad.exp * 1000);
      // playLoad.roles = [playLoad.role];
      request.user = playLoad;
      return true;
    } catch (error) {
      throw new UnauthorizedException('Invalido Token');
    }
  }
}
