package com.freeway.web.services.abstras.del;

import com.freeway.web.messages.FeedBackMessage;

/**
 * @author FXStudio.Ajaxfan
 */
public interface IDelete<T> {
	public FeedBackMessage del(T t);
}
