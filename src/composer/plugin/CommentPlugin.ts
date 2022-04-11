import { Blocks } from '../Blocks';
import { Comment } from '../Comment';
import { ComposerPlugin } from './ComposerPlugin';

/**
 * A composer plugin that adds a comment to a page.
 * Together with a Comment object, the plugin also expects
 * a key argument (identifying the comment block) and a precedece argument
 * (telling the composer where in the file to place the comment block).
 */
export class CommentPlugin implements ComposerPlugin {

  constructor(
    protected readonly comment: Comment,
    protected readonly key: string,
    protected readonly precedence: number
  ) { }

  onCompose(blocks: Blocks): void {
    blocks.add({
      key: this.key,
      precedence: this.precedence,
      data: Comment.stringify(this.comment)
    });
  }
}
