package com.freeway.web.services.abstras.update;

import com.freeway.web.messages.FeedBackMessage;

/**
 * @author FXStudio.Ajaxfan
 */
public interface IUpdate<T> {
	public FeedBackMessage update(T t);
}
