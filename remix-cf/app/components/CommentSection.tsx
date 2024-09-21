import React from 'react';

interface CommentSectionProps {
  softwareId: string;
}

export function CommentSection({ softwareId }: CommentSectionProps) {
  // 这里是评论区的实现，暂时用一个占位符
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">评论区</h3>
      <p>评论功能正在开发中，敬请期待！(软件ID: {softwareId})</p>
    </div>
  );
}