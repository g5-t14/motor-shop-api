import { ensureAdExistsMiddleware } from "./ensureAdExists.middlewares";
import { ensureAuthMiddleware } from "./ensureAuth.middleware";
import { ensureCpfExistsMiddleware } from "./ensureCpfExists.middleware";
import { ensureDataIsValidMiddleware } from "./ensureDataIsValid.middleware";
import { ensureEmailExistsMiddleware } from "./ensureEmailExists.middleware";
import { ensureIsOwnerAdMiddleware } from "./ensureIsOwnerAd.middleware";
import { ensureIsOwnerUserMiddleware } from "./ensureIsOwnerUser.middlewares";
import { ensureUserExistsMiddleware } from "./ensureUserExists.middleware";
import { ensureIsSellerMiddleware } from "./ensureIsSeller.middlewares";
import { ensureCommentExistsMiddleware } from "./ensureCommentExist.middleware";
import { ensureIsOwnerCommentMiddleware } from "./ensureIsOwnerComment.middleware";

export {
  ensureAdExistsMiddleware,
  ensureAuthMiddleware,
  ensureCpfExistsMiddleware,
  ensureDataIsValidMiddleware,
  ensureEmailExistsMiddleware,
  ensureIsOwnerAdMiddleware,
  ensureUserExistsMiddleware,
  ensureIsOwnerUserMiddleware,
  ensureIsSellerMiddleware,
  ensureCommentExistsMiddleware,
  ensureIsOwnerCommentMiddleware,
};
